// type Includes<T extends any[], A extends T[number]> = A extends T[number] ? true : false;
type Includes<T extends readonly any[], U> = {
  [P in  T[number]]: true;
}[U] extends true ? true : false;

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
