import { Subject } from 'rxjs';
import { _AssetType, _ChainAsset, _ChainInfo } from '@subwallet/chain-list/types';
import { _ChainState, _ValidateCustomTokenRequest, _ValidateCustomTokenResponse } from "./types";
export declare class ChainService {
    private dataMap;
    private lockChainInfoMap;
    private substrateChainHandler;
    private evmChainHandler;
    private chainInfoMapSubject;
    private chainStateMapSubject;
    private assetRegistrySubject;
    private logger;
    constructor();
    getChainInfoByKey(key: string): _ChainInfo;
    initChainState(): void;
    subscribeChainInfoMap(): Subject<Record<string, _ChainInfo>>;
    subscribeAssetRegistry(): Subject<Record<string, _ChainAsset>>;
    subscribeChainStateMap(): Subject<Record<string, _ChainState>>;
    getAssetRegistry(): Record<string, _ChainAsset>;
    getSmartContractTokens(): Record<string, _ChainAsset>;
    getChainInfoMap(): Record<string, _ChainInfo>;
    getChainStateMap(): Record<string, _ChainState>;
    removeChain(slug: string): boolean;
    updateChainActiveStatus(slug: string, active: boolean): boolean;
    getSupportedSmartContractTypes(): _AssetType[];
    resetChainInfoMap(): boolean;
    updateChainState(slug: string, active: boolean | null, currentProvider: string | null): void;
    upsertChainInfo(data: Record<string, any>): boolean;
    private generateSlugForChain;
    validateCustomChain(provider: string, existingChainSlug?: string): Promise<Record<string, any>>;
    private getChainSpecByProvider;
    private validateProvider;
    private getSmartContractTokenInfo;
    validateCustomToken(data: _ValidateCustomTokenRequest): Promise<_ValidateCustomTokenResponse>;
    private generateSlugForToken;
    upsertCustomToken(token: _ChainAsset): void;
    deleteCustomTokens(targetTokens: string[]): void;
}