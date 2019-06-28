N = input()
A = list(map(int, input().split()))

isEven = True
count = 0
while isEven:
    for i in A:
        if i % 2 == 1:
            isEven = False
    if isEven:
        A = list(map(lambda x: x/2, A))
        count += 1
print(count)
