def shiftingLetters(S, shifts):
    res = ''
    total = sum(shifts)
    for i in range(len(S)):
        if i >= len(shifts):
            break
        shifted = ord(S[i]) + (total % 26)
        if shifted > ord('z'):
            while shifted > ord('z'):
                shifted = (shifted - ord('z')) + (ord('a') - 1)
        res += chr(shifted)
        total -= shifts[i]
    return res

a = "bad"
b = [10,20,30]

print(shiftingLetters(a, b))
