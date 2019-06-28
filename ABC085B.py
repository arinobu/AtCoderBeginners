N = int(input())
d = []
for i in range(N):
    d.append(int(input()))
d = list(set(d))
print(len(d))
