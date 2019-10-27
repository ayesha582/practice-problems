function returnSeatAndWindow(seatNo) {
  const mapper = {
    6: 7,
    5: 8,
    4: 9,
    3: 10,
    2: 11,
    1: 12,
  };
  const seats = {
    1: 'WS',
    12: 'WS',
    6: 'WS',
    7: 'WS',
    5: 'MS',
    11: 'MS',
    2: 'MS',
    8: 'MS',
    10: 'AS',
    3: 'AS',
    9: 'AS',
    4: 'AS',
  };
  const rem = seatNo % 12;
  if (rem > 6) {
    let _seatNo;
    for (let [key, value] of Object.entries(mapper)) {
      if (value === rem) {
        _seatNo = seatNo - Math.abs(key - value);
        break;
      }
    }
    return {
      seatNo: _seatNo,
      seatType: seats[rem],
    };
  } else {
    return {
      seatNo: seatNo + Math.abs(rem - mapper[rem]),
      seatType: seats[rem],
    };
  }
}

console.log(returnSeatAndWindow(40));
