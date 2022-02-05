export file=target/wasm32-unknown-unknown/release/rust_token.wasm

cargo build --target wasm32-unknown-unknown --release
near dev-deploy --wasmFile $file