# Jest là gì

Jest là thư viện javascript hỗ trợ việc kiểm thử được sử dụng rộng rãi hiện nay

# Cú pháp cơ bản:

test('Noi dung test',()=>{
expect(gia_tri).{ham_kiem_thu}
....
expect(gia_tri).{ham_kiem_thu}

})
Mỗi test() được coi là 1 pha kiểm thử

Ví dụ :
test('null', () => {
const n = null;
expect(n).toBeNull();
expect(n).toBeDefined();
expect(n).toBeFalsy();
});

# Một số trường hợp kiểm thử cơ bản :

## Với việc kiểm tra true/false

-   toBeNull(): Kiểm tra giá trị có phải null hay không
-   toBeUndefined(): Kiểm tra giá trị có phải undefined hay không
-   toBeDefined(): Đối ngược với toBeUndefined
-   toBeTruthy()/toBeFalsy(): Kiểm tra đúng sai

## Với việc kiểm tra Number:

-   toBe(number)/toEqual(number) : Kiểm tra bằng
-   toBeClosed(number): Kiểm tra bằng với trường hợp số thực
-   toBeGreaterThanOrEqual(number): Kiểm tra lớn hơn hoặc bằng
-   toBeGreaterThan(number): Kiểm tra lớn hơn
-   toBeLessThan(number): Kiểm tra nhỏ hơn
-   toBeLessThanOrEqual(number): Kiểm tra nhỏ hơn hoặc bằng

## Với việc kiểm tra chuỗi:

-   toMatch(stringRegex): Kiểm tra khớp với chuỗi string Regex hay không

## Với việc kiểm tra mảng :

-   toContain(value) : Kiểm tra mảng có chứa value hay không

## Với việc kiểm tra ngoại lệ :

-   toThrow(value): Kiểm tra ngoại lệ có đúng hay không
