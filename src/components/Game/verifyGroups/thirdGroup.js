import secondGroup from './secondGroup';

// Выигрышные наборы для третьей группы:
//  1.  2.
// X** **X
// *X* *X*
// **X X**

// Проверка 1 и 2 наборов.
export default function thirdGroup({ cells, sign }) {
  return secondGroup({ cells, sign, start: 0, step: 3 })
    || secondGroup({ cells, sign, start: 2, step: 1 });
}
