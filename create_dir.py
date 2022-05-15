#!\C:\Users\Admin\Documents\projects\leetcode\Scripts\activate.bat

"""
    Input a Leetcode question URL (example: https://leetcode.com/problems/add-two-numbers/)
    and the script will generate a folder and files.
"""

import sys
import os
from typing import List
import re
import requests

GRAPHQL_URL = "https://leetcode.com/graphql"


def generate_directory_name(q_id: str, string: str) -> str:
    q_id = str(q_id).zfill(3)
    return f"{q_id}-{string}"


def generate_py_filename(string: str) -> str:
    _s = string.replace('-', '_')
    return f"{_s}.py"


def generate_js_filename(string: str) -> str:
    split = string.split('-')
    string = split[0] + ''.join([x.capitalize() for x in split[1:]])
    return f"{string}.js"


def create_directory(path: str) -> None:
    try:
        os.mkdir(path)
    except OSError as _e:
        raise _e


def create_files(path: str, array: List[dict]) -> None:
    for obj in array:
        file_path = os.path.join(path, obj["filename"])
        with open(file_path, 'w') as f:
            f.write(obj["code"])


if __name__ == "__main__":
    try:
        url = sys.argv[1]

        pattern = r"(?<=leetcode.com\/problems\/)(?=\S*['-])([a-zA-Z'-]+)"
        question = re.search(pattern, url)[0]

        QUERY = """
            { 
                question (titleSlug: "%s") {
                    questionFrontendId\n
                    title\n
                    titleSlug\n
                    difficulty\n
                    codeSnippets {\n
                        lang\n
                        langSlug\n
                        code\n
                    }\n
                }
            }
        """ % question

        with requests.Session() as s:
            s.get(url)
            csrftoken = s.cookies.get_dict()['csrftoken']

            s.headers["referer"] = url
            s.headers.update({"x-csrftoken": csrftoken})
            response = s.post(
                GRAPHQL_URL,
                json={"query": QUERY}
            ).json()

            data = response["data"]["question"]

            question_id = data["questionFrontendId"]
            difficulty = data["difficulty"]
            slug = data["titleSlug"]
            code_snippets = data["codeSnippets"]

            dir_name = generate_directory_name(question_id, slug)
            difficulty = difficulty.lower()

            array = []
            ref = {"python3": generate_py_filename,
                   "javascript": generate_js_filename}

            for snippet in code_snippets:
                if snippet["langSlug"] in ref:
                    array.append({"filename": ref[snippet["langSlug"]](
                        slug), "code": snippet["code"]})

            path = os.path.join(f"{os.getcwd()}\\src\\{difficulty}", dir_name)
            create_directory(path)
            create_files(path, array)

            print(f'Created directory "{dir_name}" in "{difficulty}".')
    except Exception as _e:
        print(_e)
