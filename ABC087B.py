A = int(input())
B = int(input())
C = int(input())
X = int(input())

count = 0
for i in range(A+1):
    D = X
    D -= 500 * i
    if D < 0:
        break
    for j in range(B+1):
        E = D
        E -= 100 * j
        if E < 0:
            break
        if E <= 50 * C:
            count += 1
print(count)
