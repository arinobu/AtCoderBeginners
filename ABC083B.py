N, A, B = map(int, input().split())
output = 0
for i in range(N+1):
    s = str(i)
    tmp = 0
    for j in range(len(s)):
        tmp += int(s[j])
    if tmp >= A and tmp <= B:
        output += i
print(output)
