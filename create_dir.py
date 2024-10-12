"""
	Input a Leetcode question URL (example: https://leetcode.com/problems/add-two-numbers/)
	to generate a folder and files.
"""

import sys
import os
from typing import List
import re
import requests
import json
import getch

REFERER_URL = "https://leetcode.com"
GRAPHQL_URL = "https://leetcode.com/graphql"

langs = [
	{
		"lang": "C",
		"langSlug": "c",
		"ext": "c",
		"casing": "snake",
	},
	{
		"lang": "C++",
		"langSlug": "cpp",
		"ext": "cpp",
		"casing": "snake",
	},
	{
		"lang": "JavaScript",
		"langSlug": "javascript",
		"ext": "js",
		"casing": "camel",
	},
	{
		"lang": "Python3",
		"langSlug": "python3",
		"ext": "py",
		"casing": "snake",
	},
	{
		"lang": "Rust",
		"langSlug": "rust",
		"ext": "rs",
		"casing": "snake",
	},
	{
		"lang": "TypeScript",
		"langSlug": "typescript",
		"ext": "ts",
		"casing": "camel",
	},
	{
		"lang": "C#",
		"langSlug": "csharp",
	},
	{
		"lang": "Python",
		"langSlug": "python",
	},
	{
		"lang": "Java",
		"langSlug": "java",
	},
	{
		"lang": "PHP",
		"langSlug": "php",
	},
	{
		"lang": "Swift",
		"langSlug": "swift",
	},
	{
		"lang": "Kotlin",
		"langSlug": "kotlin",
	},
	{
		"lang": "Dart",
		"langSlug": "dart",
	},
	{
		"lang": "Go",
		"langSlug": "golang",
	},
	{
		"lang": "Ruby",
		"langSlug": "ruby",
	},
	{
		"lang": "Scala",
		"langSlug": "scala",
	},
	{
		"lang": "Rust",
		"langSlug": "rust",
	},
	{
		"lang": "Racket",
		"langSlug": "racket",
	},
	{
		"lang": "Erlang",
		"langSlug": "erlang",
	},
	{
		"lang": "Elixir",
		"langSlug": "elixir",
	},
]

# remove languages I don't plan to use
langs = langs[:6]


""" FUNCTIONS """
# expects string in hyphenated format
def convert_to_snake_case(string: str) -> str:
	s = string.replace('-', '_')
	return s


# expects string in hyphenated format
def convert_to_camel_case(string: str) -> str:
	split = string.split('-')
	s = split[0] + ''.join([x.capitalize() for x in split[1:]])
	return s


def create_directory_name(q_id: str, string: str) -> str:
	q_id = str(q_id).zfill(3)
	return f"{q_id}-{string}"


def create_filename(initial_string: str, casing: str, extension: str) -> str:
	filename = ""

	match casing:
		case "snake":
			filename = convert_to_snake_case(initial_string)
		case "camel":
			filename = convert_to_camel_case(initial_string)
		case _:
			print("ERROR: failed to create filename")
			return filename

	return f"{filename}.{extension}"


def create_directory(path: str) -> None:
	try:
		os.mkdir(path)
	except OSError as _e:
		raise _e


def create_file(path: str, filename: str, code: str) -> None:
	file_path = os.path.join(path, filename)
	with open(file_path, 'w') as f:
		f.write(code)


""" MAIN """
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
					categoryTitle\n
					codeSnippets {\n
						lang\n
						langSlug\n
						code\n
					}\n
				}
			}
		""" % question
		# solution\n

		# BEGIN SESSION
		with requests.Session() as s:
			s.get(url)
			s.headers["referer"] = REFERER_URL
			response = s.post(
				GRAPHQL_URL,
				json={"query": QUERY}
			).json()


			# DATA
			data = response["data"]["question"]
			d_question_id = data["questionFrontendId"]
			d_difficulty = data["difficulty"].lower()
			d_title = data["title"]
			d_title_slug = data["titleSlug"]
			d_code_snippets = data["codeSnippets"]


			# GET USER INPUT FOR FILES TO CREATE
			print("Press Y or N to answer the leetcode problem in a given language")
			files_to_create = []
			for l in langs:
				print(f"{l["lang"]}")

				# TODO: change this to a while loop to wait for correct input
				key = getch.getch()

				if key == "y" or key == "Y":
					files_to_create.append(l)


			if len(files_to_create) == 0:
				print("NO FILES TO CREATE")
				exit()


			# CREATE THE DIRECTORY
			dir_name = create_directory_name(d_question_id, d_title_slug)
			path = os.path.join(f"{os.getcwd()}/src/{d_difficulty}", dir_name)
			create_directory(path)


			# CREATE THE FILES
			files_created = []
			for file in files_to_create:
				filename = create_filename(d_title_slug, file["casing"], file["ext"])

				snippet = ""
				for s in d_code_snippets:
					if s["langSlug"] == file["langSlug"]:
						snippet = s["code"]	
			
				create_file(path, filename, snippet)
				files_created.append(filename)


			# PRINT OUTPUT
			print(f'Created directory "{dir_name}" in "{d_difficulty}".')
			print(f'Created files:')
			for file in files_created:
				print(file)

	except Exception as _e:
		print("ERROR:", _e)
