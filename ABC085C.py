N, Y = map(int, input().split())
output = [-1, -1, -1]
for i in range(N+1):
    tmpN = N - i
    tmpY = Y - 10000 * i
    if tmpY < 0:
        break
    for j in range(tmpN + 1):
        if tmpY - 5000 * j - 1000 * (tmpN - j) == 0:
            output = [i, j, tmpN-j]
print("{} {} {}".format(output[0], output[1], output[2]))
