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


print(minIncrementForUnique([7,2,1,2,1,3]))

# 7 2 1 
