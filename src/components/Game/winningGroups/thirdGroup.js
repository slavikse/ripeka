import secondGroup from './secondGroup';

// Выигрышные наборы для третьей группы:
//  1.  2.
// X** **X
// *X* *X*
// **X X**

// Проверка 1 и 2 наборов.
export default function thirdGroup({ cells, currentSign }) {
  return secondGroup({ cells, currentSign, start: 0, step: 3 })
    || secondGroup({ cells, currentSign, start: 2, step: 1 });
}
