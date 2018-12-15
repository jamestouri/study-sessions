def findFrequentTreeSum(root):
    res = []
    hash_table = {}
    stack = []
    stack.append((root, []))
    hash_table[root] = root.val
    while stack:
        node, prev = stack.pop()
        if prev is not None:
            for n in prev:
                hash_table[n] += node.val
        if node.left:
            stack.append((node.left, prev.append(node)))
        if node.right:
            stack.append((node.right, prev.append(node)))
    max_value = 0
    new_hash = {}
    for k, v in hash_table.items():
        if v in new_hash:
            new_hash[v] += 1
        else:
            new_hash[v] = 1
    for k, v in hash_table.items():
        max_value = max(max_value, v)
    for k, v in hash_table.items():
        if v == max_value:
            res.append(k)
    return res


# Examples 1
# Input:
#
#   5
#  /  \
# 2   -3
# return [2, -3, 4], since all the values happen only once, return all of them in any order.
# Examples 2
# Input:
#
#   5
#  /  \
# 2   -5
#
