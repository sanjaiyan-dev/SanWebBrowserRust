// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod tools;

use tauri;
use tools::resource_managment::san_hardware;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            san_hardware::get_hardware_statistics
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
