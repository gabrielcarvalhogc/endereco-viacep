import { Routes } from '@angular/router';
import { CadastroEnderecoComponent } from './pages/cadastro-endereco/cadastro-endereco.component';
import { ConfirmacaoComponent } from './pages/confirmacao/confirmacao.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "endereco",
        pathMatch: "full"  // Redireciona para /endereco se o path estiver vazio
    },
    {
        path: "endereco",
        component: CadastroEnderecoComponent
    },
    {
        path: "confirmacao",
        component: ConfirmacaoComponent
    }
];
