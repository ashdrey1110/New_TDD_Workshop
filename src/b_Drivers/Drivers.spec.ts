// Don't forget to import your functions
import {getDriverStatus, DriverStatus} from './Drivers';

describe("Drivers", () => {
  test("Get too young returned if younger than 16", () => {
    //write your assertions here
    expect(getDriverStatus(14)).toBe(DriverStatus.TOO_YOUNG);
  });
  test("Get too OLD returned if OLDER than 85", () => {
    //write your assertions here
    expect(getDriverStatus(100)).toBe(DriverStatus.TOO_OLD);
  });
  test("Get ELIGIBLE returned if BTWN 16 AND 85", () => {
    //write your assertions here
    expect(getDriverStatus(22)).toBe(DriverStatus.ELIGIBLE);
  });
});
