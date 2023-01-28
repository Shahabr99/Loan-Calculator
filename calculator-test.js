describe("should test the monthlyPayment function", function () {
  it("should calculate the monthly rate correctly", function () {
    expect(
      calculateMonthlyPayment({ amount: 10000, years: 5, rate: 2.5 })
    ).toBe("177.47");
  });

  it("should return a result with 2 decimal places", function () {
    expect(calculateMonthlyPayment({ amount: 12001.99, years: 2, rate: 2.5 }));
  });

  it("should return a string", function () {
    expect(
      calculateMonthlyPayment({ amount: 10000, years: 5, rate: 2.5 })
    ).toBeInstanceOf(String);
  });
});
