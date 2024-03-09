# Функции
1. 🌟🌟🌟
```rust,editable

fn main() {
    // Не меняйте эти две строки!
    let (x, y) = (1, 2);
    let s = sum(x, y);

    assert_eq!(s, 3);

    println!("Успешно!");
}

fn sum(x, y: i32) {
    x + y;
}
```


2. 🌟
```rust,editable
fn main() {
   print();
}

// Замените i32 другим типом
fn print() -> i32 {
   println!("Success!");
}
```


3. 🌟🌟🌟

```rust,editable
// Решите двумя способами
// НЕ дайте `println!` заработать
fn main() {
    never_return();

    println!("Не удалось!");
}

fn never_return() -> ! {
    // Реализуйте функцию, не меняя её сигнатуру

}
```

### Расходящиеся функции
Расходящиеся функции никогда не возвращают ничего, поэтому их можно использовать там, где ожидается значение любого типа.

4. 🌟🌟
```rust,editable

fn main() {
    println!("Успешно!");
}

fn get_option(tp: u8) -> Option<i32> {
    match tp {
        1 => {
            // TODO
        }
        _ => {
            // TODO
        }
    };
    
    // Вместо того, чтобы вернуть None, мы воспользуемся синтаксисом расходящейся функции
    never_return_fn()
}

// РЕАЛИЗУЙ эту функцию ТРЕМЯ способами
fn never_return_fn() -> ! {
    
}
```

5. 🌟🌟
```rust,editable

fn main() {
    // ЗАПОЛНИ пропуски
    let b = __;

    let _v = match b {
        true => 1,
        // Так же, расходящиеся функции можно использовать в выражении с match для замены любого значения
        false => {
            println!("Успешно!");
            panic!("Мы так и не вернули значение в случае с `false`, но мы можем поднять панику.");
        }
    };

    println!("Если эта строчка вывелась, значит упражнение выполнено неверно.");
}
```

> Вы можете найти решения [сдесь](https://github.com/sunface/rust-by-practice/blob/master/solutions/basic-types/functions.md) (в папке solutions), но используйте это только при необходимости