export function mapToPrimitive(type: string) {
  const formatMap: Record<string, any> = {
    Int: {
      type: 'integer',
      format: 'int32',
    },
    Long: {
      type: 'integer',
      format: 'int64',
    },
    Float: {
      type: 'number',
      format: 'float',
    },
    Double: {
      type: 'number',
      format: 'double'
    },
    String: {
      type: 'string',
    },
    Byte: {
      type: 'string',
      format: 'byte'
    },
    Date: {
      type: 'string',
      format: 'date'
    },
    DateTime: {
      type: 'string',
      format: 'date-time'
    },
    Boolean: {
      type: 'boolean',
    },
    ID: {
      type: 'string',
    },
  };

  if (formatMap[type]) {
    return formatMap[type];
  }
}

export function mapToRef(type: string) {
  return `#/components/schemas/${type}`;
}
