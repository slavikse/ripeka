import secondGroup from './secondGroup';

// Выигрышные наборы для третьей группы:
//  1.  2.
// X** **X
// *X* *X*
// **X X**
// todo ошибка для 2 группы
export default function thirdGroup({ cells, currentSign }) {
  // Проверка 1 набора.
  if (secondGroup({ cells, currentSign, start: 0, step: 3 })) {
    return true;
  }

  // Проверка 2 набора.
  if (secondGroup({ cells, currentSign, start: 2, step: 1 })) {
    return true;
  }

  return false;
}

// todo объединение под ||
