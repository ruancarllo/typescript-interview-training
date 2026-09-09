declare global {
  function setImmediate(callback: (...args: any[]) => void, ...args: any[]): number;
  function clearImmediate(immediateId: number): void;

  namespace process {
    function nextTick(callback: (...args: any[]) => void, ...args: any[]): void;
  }
}

export {};