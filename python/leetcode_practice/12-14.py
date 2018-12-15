def minIncrementForUnique(A):
    given_set = set()
    res = 0
    for i in range(len(A)):
        if A[i] in given_set:
            while A[i] in given_set:
                res += 1
                A[i] += 1
        given_set.add(A[i])
    return res


# print(minIncrementForUnique([7,2,1,2,1,3]))

def wordSubsets(A, B):
     sub_chars = {}
     res = []
     for i in range(len(B)):
         temp = {}
         for j in range(len(B[i])):
             char = B[i][j]
             if char in temp:
                 temp[char] += 1
             else:
                 temp[char] = 1
         for key, val in temp.items():
             if key in sub_chars:
                 sub_chars[key] = max(val, sub_chars[key])
             else:
                 sub_chars[key] = val

     for i in range(len(A)):
         temp_chars = {}
         for j in range(len(A[i])):
             c = A[i][j]
             if c in sub_chars:
                 temp_chars[c] += 1
             else:
                 temp_chars[c] = 1
         count = 0
         print(temp_chars)
         print(sub_chars)
         for k, v in temp_chars.items():
             if v != sub_chars[k]:
                 count -= 1
             count += 1
         if count == len(temp_chars):
             res.append(A[i])
     return res



A = ["amazon","apple","facebook","google","leetcode"]
B = ["e","o"]
# Output: ["facebook","google","leetcode"]
print(wordSubsets(A, B))
# Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["l","e"]
# Output: ["apple","google","leetcode"]
# Example 3:
#
# Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["e","oo"]
# Output: ["facebook","google"]

#
# Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["ec","oc","ceo"]
# Output: ["facebook","leetcode"]
