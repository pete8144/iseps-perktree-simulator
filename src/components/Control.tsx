import React, {
  Alert,
  Box,
  Button,
  Snackbar,
  Stack,
  Typography,
} from '@mui/material'
import SubjectIcon from '@mui/icons-material/Subject'
import ReportProblemIcon from '@mui/icons-material/ReportProblem'

import { useAppContext } from '../hooks/useAppContext'

import Zoom from './controls/Zoom'
import { useMemo } from 'react'
import { validateTree } from '../utils/perk'

const Control = () => {
  const { perkState, showGuideModal, showBonusModal, showNoteModal } =
    useAppContext()

  const invalidTreeMessage = useMemo(
    () => validateTree(perkState.perks),
    [perkState.perks],
  )

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '66px',
        left: '10px',
        right: '10px',
        bottom: '10px',
        pointerEvents: 'none',
      }}
    >
      <Zoom
        sx={{
          position: 'absolute',
          top: '0',
          left: '0',
          pointerEvents: 'auto',
        }}
      />
      <Typography
        sx={{
          position: 'absolute',
          top: '0',
          right: '0',
          p: '6px 8px',
          color: invalidTreeMessage ? 'error.dark' : null,
        }}
      >
        {invalidTreeMessage != null && (
          <ReportProblemIcon
            sx={{ fontSize: '16px', verticalAlign: 'middle', mr: 1 }}
          />
        )}
        SE{perkState.perkCount}
      </Typography>

      {invalidTreeMessage != null && (
        <Snackbar open={true} autoHideDuration={2000} sx={{ width: '100%' }}>
          <Alert severity="error" sx={{ maxWidth: '70%' }}>
            <b>Invalid Setup:</b>
            <br />
            {invalidTreeMessage}
          </Alert>
        </Snackbar>
      )}

      <Stack
        gap={1}
        direction="row"
        sx={{
          position: 'absolute',
          bottom: '0',
          right: '0',
          pointerEvents: 'auto',
        }}
      >
        {perkState.isUsingGuide && (
          <Button
            sx={{
              minWidth: '0',
            }}
            onClick={showNoteModal}
          >
            <SubjectIcon />
          </Button>
        )}
        <Button onClick={showGuideModal}>Guide</Button>
      </Stack>
    </Box>
  )
}

export default Control
