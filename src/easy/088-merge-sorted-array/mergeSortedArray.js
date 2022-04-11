var merge = function (nums1, m, nums2, n) {
  const left = nums1.slice(0, m);
  const right = nums2.slice();

  let nL = left.length,
    nR = n,
    i = 0,
    j = 0,
    k = 0;

  while (i < nL && j < nR) {
    if (left[i] <= right[j]) {
      nums1[k] = left[i];
      i++;
    } else {
      nums1[k] = right[j];
      j++;
    }

    k++;
  }

  while (i < nL) {
    nums1[k] = left[i];
    i++;
    k++;
  }

  while (j < nR) {
    nums1[k] = right[j];
    j++;
    k++;
  }
};
