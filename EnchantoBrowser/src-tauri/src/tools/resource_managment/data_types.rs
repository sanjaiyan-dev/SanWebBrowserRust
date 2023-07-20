enum TermalSensorType {
    CPUEmbeddedDiode,

    Transistor3904,

    ThermalDiode,

    Thermistor,

    AMDAMDSI,

    IntelPECI,

    Unknown(u8),
}

pub struct SanCPUInfos {
    cpu_name: String,
    cpu_brand: String,
    cpu_frequency: u64,
    cpu_usage: f32,
}

pub struct SanHardwareComponentsInfos {
    cpu_brand: String,
    device_model: Option<String>,
    name: String,
    temperature: Option<f32>,
    max: Option<f32>,
    threshold_max: Option<f32>,
    threshold_min: Option<f32>,
    threshold_critical: Option<f32>,
    sensor_type: Option<TermalSensorType>,
    label: String,
}

pub struct SanDiskManagment {
    disk_name: String,
    totoal_space: u64,
    available_space: u64,
}
