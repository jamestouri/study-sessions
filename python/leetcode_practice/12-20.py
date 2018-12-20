def shiftingLetters(S, shifts):
    res = ''
    total = sum(shifts)
    for i in range(len(S)):
        if i >= len(shifts):
            break
        shifted = ord(S[i]) + (total % 26)
        if shifted > ord('z'):
            shifted = (shifted - ord('z')) + (ord('a') - 1)
        res += chr(shifted)
        total -= shifts[i]
    return res

a = "bad"
b = [10,20,30]


def setZeroes(matrix):
    i_set = set()
    j_set = set()
    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            if matrix[i][j] == 0:
                if i not in i_set and j not in j_set:
                    i_set.add(i)
                    j_set.add(j)
                    x = i
                    y = j
                    while x < len(matrix) - 1:
                        matrix[x][j] = 0
                        x += 1
                    while y < len(matrix[i]) - 1:
                        matrix[i][y] = 0
                        y += 1
                    
