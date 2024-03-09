# Символ(Char), Логический тип(Bool) и Unit

### Char
1. 🌟
```rust,editable

// Заставьте это работать
use std::mem::size_of_val;
fn main() {
    let c1 = 'a';
    assert_eq!(size_of_val(&c1),1); 

    let c2 = '中';
    assert_eq!(size_of_val(&c2),3); 

    println!("Успешно!");
} 
```

2. 🌟
```rust,editable

// Заставьте это работать
fn main() {
    let c1 = "中";
    print_char(c1);
} 

fn print_char(c : char) {
    println!("{}", c);
}
```

### Bool
3. 🌟
```rust,editable

// Заставьте println! выполняться
fn main() {
    let _f: bool = false;

    let t = true;
    if !t {
        println!("Успешно!");
    }
} 
```

4. 🌟
```rust,editable

// Заставьте это работать
fn main() {
    let f = true;
    let t = true && false;
    assert_eq!(t, f);

    println!("Успешно!");
}
```


### Unit type
5. 🌟🌟
```rust,editable

// Заставьте это работать, не меняя `implicitly_ret_unit` !
fn main() {
    let _v: () = ();

    let v = (2, 3);
    assert_eq!(v, implicitly_ret_unit());

    println!("Успешно!");
}

fn implicitly_ret_unit() {
    println!("Я верну ()");
}

// Не делайте так
fn explicitly_ret_unit() -> () {
    println!("Я верну ()");
}
```

6. 🌟🌟 What's the size of the unit type?
```rust,editable

// Поменяйте `4` в assert, чтобы заставить это работать
use std::mem::size_of_val;
fn main() {
    let unit: () = ();
    assert!(size_of_val(&unit) == 4);

    println!("Успешно!");
}
```

> Вы можете найти решения [сдесь](https://github.com/sunface/rust-by-practice) (в папке solutions), но используйте это только при необходимости