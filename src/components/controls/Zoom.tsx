import { Button, Stack, SxProps } from '@mui/material'
import ZoomInIcon from '@mui/icons-material/ZoomIn'
import ZoomOutIcon from '@mui/icons-material/ZoomOut'
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong'
import { useAppContext } from '../../hooks/useAppContext'

const buttonSx = {
  minWidth: '0',
}

type Props = {
  sx?: SxProps
}

const Zoom = ({ sx }: Props) => {
  const { zoom } = useAppContext()

  return (
    <Stack gap={1} direction="row" sx={{ ...sx }}>
      <Button sx={{ ...buttonSx }} onClick={() => zoom(0)}>
        <CenterFocusStrongIcon />
      </Button>
      <Button sx={{ ...buttonSx }} onClick={() => zoom(-1)}>
        <ZoomInIcon />
      </Button>
      <Button sx={{ ...buttonSx }} onClick={() => zoom(1)}>
        <ZoomOutIcon />
      </Button>
    </Stack>
  )
}

export default Zoom
