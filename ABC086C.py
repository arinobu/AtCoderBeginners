N = int(input())
t = 0
x = 0
y = 0
output = "Yes"
for i in range(N):
    T, X, Y = map(int, input().split())
    if (T - t - abs(X - x) - abs(Y - y) >= 0) and (T - t - abs(X - x) - abs(Y - y)) % 2 == 0:
        t, x, y = T, X, Y
    else:
        output = "No"
        break
print(output)
