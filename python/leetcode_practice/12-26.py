def searchMatrix(matrix, target):
    for i in range(len(matrix)):
    lower = -1
    upper = len(matrix[i])
    while lower + 1 < upper:
        mid = (upper + lower) / 2
        if matrix[i][mid] == target:
            return True
        elif matrix[i][mid] > target:
            upper = mid
        else:
            lower = mid
    return False
