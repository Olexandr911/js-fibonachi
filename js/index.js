let fibs = lazy([0, 1])(_ => fibs[_ - 1] + fibs[_ - 2]);
fibs[10] // 55
