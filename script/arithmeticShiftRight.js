function arithmeticShiftRight(A, Q, QMO) {
    var l = Q.length - 1,
        i;
    QMO[0] = Q[l];
    for (i = l; i > 0; i--) {
        Q[i] = Q[i - 1];
    }
    l = A.length - 1;
    Q[0] = A[l];
    for (i = l; i > 0; i--) {
        A[i] = A[i - 1];
    }
}