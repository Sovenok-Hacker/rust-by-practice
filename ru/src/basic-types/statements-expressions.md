# Утверждения и выражения

### Примеры
```rust,editable
fn main() {
    let x = 5u32;

    let y = {
        let x_squared = x * x;
        let x_cube = x_squared * x;

        // Это выражение будет присвоено `y`
        x_cube + x_squared + x
    };

    let z = {
        // Точка с запятой заглушает выражение и `()` будет присвоено `z`
        2 * x;
    };

    println!("x is {:?}", x);
    println!("y is {:?}", y);
    println!("z is {:?}", z);
}
```

### Упражнения
1. 🌟🌟
```rust,editable
// Заставьте это работать двумя способами
fn main() {
   let v = {
       let mut x = 1;
       x += 2
   };

   assert_eq!(v, 3);

   println!("Успешно!");
}
```

2. 🌟
```rust,editable

fn main() {
   let v = (let x = 3);

   assert!(v == 3);

   println!("Успешно!");
}
```

3. 🌟
```rust,editable

fn main() {
    let s = sum(1 , 2);
    assert_eq!(s, 3);

    println!("Успешно!");
}

fn sum(x: i32, y: i32) -> i32 {
    x + y;
}
```

> Вы можете найти решения [сдесь](https://github.com/sunface/rust-by-practice) (в папке solutions), но используйте это только при необходимости