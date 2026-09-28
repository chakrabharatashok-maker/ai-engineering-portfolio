interface QueryResult<T> {
  data: T[] | null;
  error: { message: string } | null;
}

interface DemoQuery<T> {
  select(columns: string): DemoQuery<T>;
  eq(column: string, value: string): Promise<QueryResult<T>>;
}

interface DemoClient {
  from<T>(table: string): DemoQuery<T>;
}

export interface DemoRecord {
  id: string;
  title: string;
  status: "active" | "archived";
}

export async function getActiveRecord(
  client: DemoClient,
  id: string,
): Promise<DemoRecord | null> {
  if (!id.trim()) {
    throw new Error("Record id is required");
  }

  const { data, error } = await client
    .from<DemoRecord>("demo_records")
    .select("id,title,status")
    .eq("id", id);

  if (error) {
    throw new Error(`Database query failed: ${error.message}`);
  }

  const record = data?.[0] ?? null;
  return record?.status === "active" ? record : null;
}
