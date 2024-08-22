export function generateTimestamp(): string {
    return new Date().toISOString().slice(0, 23).replace('T', ' ');
}
