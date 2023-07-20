use sysinfo::{ComponentExt, SystemExt, System};
use tauri::Runtime;

#[tauri::command]
pub fn get_hardware_statistics<R: Runtime>(
    app: tauri::AppHandle<R>,
    window: tauri::Window<R>,
) -> String {
    let s = System::new_all();
    for component in s.components() {
        println!("{}: {}°C", component.label(), component.temperature());
    }
    return s.name().unwrap();
}
