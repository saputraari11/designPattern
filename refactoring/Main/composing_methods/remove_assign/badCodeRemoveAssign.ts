class BadCodeRemoveAssign {
    discount(inputVal: number, quantity: number): number {
        if (quantity > 50) {
          inputVal -= 2;
        }
        // ...

        return inputVal
    }
}