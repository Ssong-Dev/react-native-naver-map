export declare interface GpsUtilInterface {
    isDeviceGPSOn: () => Promise<boolean>;
    checkDeviceGPS: () => Promise<void>;
}
/**
 * Only Android Device
 */
export declare const GpsUtils: GpsUtilInterface;
