def findFrequentTreeSum(root):
    res = []
    hash_table = {}
    def sum_helper(node, arr = []):
        if not node.left and not node.right:
            if node.val in hash_table:
                hash_table[node.val] += 1
            else:
                hash_table[node.val] = 1
            for n in arr:
                num = n + node.val
                if num in hash_table:
                    hash_table[num] += 1
                else:
                    hash_table[num] = 1
            return
        arr.append(node.val)
        if node.right:
            for i in range(len(arr)):
                arr[i] += node.right.val
        if node.left:
            for i in range(len(arr)):
                arr[i] += node.left.val
        if node.right:
            arr.append(node.right.val)
            sum_helper(node.right, arr)
        if node.left:
            arr.append(node.left.val)
            sum_helper(node.left, arr)
    sum_helper(root)
    max_value = 0
    for key, val in hash_table.items():
        max_value = max(val, max_value)
    for k, v in hash_table.items():
        if v == max_value:
            res.append(k)
    return res
