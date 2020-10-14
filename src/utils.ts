export function createResource<T>(promise: Promise<T>) {
  let error: Error | null = null;
  let result: T | null = null;
  const suspender = promise.then(
    (resolved) => {
      result = resolved;
    },
    (rejected) => {
      error = rejected;
    }
  );
  return {
    read(): T {
      if (error === null && result === null) throw suspender;
      if (error) throw error;
      if (result) return result;
      throw new Error("ここには到達しないはず");
    },
  };
}
