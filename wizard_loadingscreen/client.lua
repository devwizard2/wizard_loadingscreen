local expectedResourceName = "wizard_loadingscreen"
local currentResourceName = GetCurrentResourceName()
if currentResourceName ~= expectedResourceName then
print("^1Resource renamed! Change it as it was! |wizard_loadingscreen|^0")
Citizen.Wait(5000)
return
end