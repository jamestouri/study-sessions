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
                i_set.add(i)
                j_set.add(j)
    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            if i in i_set or j in j_set:
                matrix[i][j] = 0
                
