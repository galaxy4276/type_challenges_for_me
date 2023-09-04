/**
 * T에서 K 프로퍼티만 선택해 새로운 오브젝트 타입을 만드는 내장 제네릭 Pick<T, K>을 이를 사용하지 않고 구현하세요.
 */

interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyPick<K, T extends keyof K> = {
  [key in T]: K[key];
}

type keyOfValue = MyPick<Todo, 'completed' | 'title'>;
