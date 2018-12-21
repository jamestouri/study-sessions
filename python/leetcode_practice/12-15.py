# def findFrequentTreeSum(root):
#     res = []
#     hash_table = {}
#     def sum_helper(node, arr = []):
#         if not node.left and not node.right:
#             if node.val in hash_table:
#                 hash_table[node.val] += 1
#             else:
#                 hash_table[node.val] = 1
#             for n in arr:
#                 num = n + node.val
#                 if num in hash_table:
#                     hash_table[num] += 1
#                 else:
#                     hash_table[num] = 1
#             return
#         arr.append(node.val)
#         if node.right:
#             for i in range(len(arr)):
#                 arr[i] += node.right.val
#         if node.left:
#             for i in range(len(arr)):
#                 arr[i] += node.left.val
#         if node.right:
#             arr.append(node.right.val)
#             sum_helper(node.right, arr)
#         if node.left:
#             arr.append(node.left.val)
#             sum_helper(node.left, arr)
#     sum_helper(root)
#     max_value = 0
#     for key, val in hash_table.items():
#         max_value = max(val, max_value)
#     for k, v in hash_table.items():
#         if v == max_value:
#             res.append(k)
#     return res

import collections
# def findFrequentTreeSum(root):
#     res = []
#     arr = []
#     def sum_helper(node):
#         if node is None:
#             return 0
#         value = node.val + sum_helper(node.left) + sum_helper(node.right)
#         res.append(value)
#             return value
#     sum_helper(root)
#     count = collections.Counter(res)
#     max_count = 0
#     for k, v in count.items():
#         max_count = max(max_count, v)
#     for key, val in count.items():
#         if val == max_count:
#             arr.append(key)
#     return arr


# def maximumSwap(num):
    # string = list(str(num))
    # arr = sorted(string)
    # res = ''
    # for i in range(len(string)):
    #     if string[i] == arr[-1]:
    #         arr.pop()
    #     else:
    #         n = i + 1
    #         while n < len(string) and string[n] != arr[-1]:
    #             n += 1
    #         string[i], string[n] = string[n], string[i]
    #         break
    # for i in range(len(string)):
    #     res += string[i]
    # return int(res)
def maximumSwap(num):
    listed = list(str(num))
    counted = collections.Counter(listed)
    sort_keys = sorted(counted)
    res = ''
    for i in range(len(listed)):
        if listed[i] == sort_keys[-1]:
            if counted[sort_keys[-1]] > 1:
                counted[sort_keys[-1]] -= 1
            elif counted[sort_keys[-1]] == 1:
                sort_keys.pop()
        else:
            n = i + 1
            while n < len(listed):
                if counted[listed[n]] == sort_keys[-1]:
                    if counted[listed[n]] > 1:
                        counted[listed[n]] -= 1
                    else:
                        listed[i], listed[n] = listed[n], listed[i]
                        break
                n += 1
    for i in range(len(listed)):
        res += listed[i]
    return int(res)

print(maximumSwap(2736))
