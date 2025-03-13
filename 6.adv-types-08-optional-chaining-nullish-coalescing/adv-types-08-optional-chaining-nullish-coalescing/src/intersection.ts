// intersection type - " & " keyword

type FileData = {
  path: string;
  content: string;
};

type DatabaseData = {
  connectionUrl: string;
  credentials: string;
};

type Status = {
  isOpen: boolean;
  erroeMessage?: string;
};

type AccesFileData = FileData & Status; // intersection type - combination of two type structure
type AccesDatabaseData = DatabaseData & Status; // intersection

// alternative - interface

interface FileInfo {
  path: string;
  content: string;
}

interface StatusInfo {
  isOpen: boolean;
  erroeMessage?: string;
}

interface AcessFileInfo extends FileInfo, StatusInfo {} // interface - altenate to intersection
