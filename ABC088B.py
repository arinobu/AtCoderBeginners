N = int(input())
A = list(map(int, input().split()))
All = sum(A)
A.sort(reverse=True)
Alice = 0
for i in range(0, N, 2):
    Alice += A[i]
Bob = All - Alice
print(Alice-Bob)
