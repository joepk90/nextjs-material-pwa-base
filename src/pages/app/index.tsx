import { Box, Paper, Typography } from '@mui/material'
import { ShellTitle } from 'components'
import { AppLayout } from 'components/layout'

export default function AppIndex() {
  return (
    <>
      <ShellTitle title="Home" />
      <Paper>
        <Box m={2} pt={2} pb={2}>
          <Box m={2}>
            <Typography variant="h6">Home</Typography>
          </Box>
          <Box m={2}>
            <Typography component="p">App version: {__VERSION__}</Typography>
            <Typography component="p">Commit sha: {__COMMIT_SHA__}</Typography>
            <Typography component="p">Build date: {__BUILD_DATE__}</Typography>
            <Typography component="p">Branch: {__BRANCH__}</Typography>
            <Typography component="p">
              Commit Message: {__COMMIT_MESSAGE__}
            </Typography>
            <Typography component="p">
              Repository: {''}
              <a href="https://github.com/joepk90/nextjs-material-pwa-base">
                https://github.com/joepk90/nextjs-material-pwa-base
              </a>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </>
  )
}

AppIndex.layout = AppLayout
