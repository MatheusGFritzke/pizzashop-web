import { Skeleton } from '@/components/ui/skeleton'
import { TableCell, TableRow } from '@/components/ui/table'

export function SkeletonOrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Skeleton className="h-12 w-20" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-12" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-12" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-12" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-12" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-12" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-12" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-12" />
      </TableCell>
    </TableRow>
  )
}
