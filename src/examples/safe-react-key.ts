export type MetadataKind = "subject" | "chapter" | "topic";

export interface MetadataItem {
  kind: MetadataKind;
  value: string | null | undefined;
}

export function metadataKey(item: MetadataItem): string {
  const normalized = item.value?.trim();

  if (!normalized) {
    throw new Error(`Cannot create a key for empty ${item.kind} metadata`);
  }

  return `${item.kind}:${normalized}`;
}

export function visibleMetadata(items: MetadataItem[]): MetadataItem[] {
  return items.filter((item) => typeof item.value === "string" && item.value.trim().length > 0);
}
